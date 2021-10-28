import * as React from "react";
import { ITextFieldStyles, TextField, } from "@fluentui/react/lib/TextField";
import { PrimaryButton, } from "@fluentui/react/lib/Button";
import { Stack, } from "@fluentui/react/lib/Stack";
import { MessageBar, MessageBarType, } from "@fluentui/react/lib/MessageBar";

const textFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: "100%", }, };
const narrowTextFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: "50%", }, };
const stackTokens = { childrenGap: 15, };

const FN_URL = "https://flyweight-airtable-swagger-builder-fn.azurewebsites.net/api/Build/swagger";

// const FN_URL = 'http://localhost:7071/api/Build/swagger'

const EMAIL_REGEX = new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
const API_URL_REGEX = new RegExp(/^(https:\/\/)(api.airtable.com)(\/v0)(\/)([a-zA-Z0-9-]*)(\/)([a-zA-Z0-9-]*)$/);

const SevereExample = ({message,}: {message: string}) => (
  <MessageBar
    messageBarType={MessageBarType.severeWarning}
  >
    {message}
  </MessageBar>
);

const SuccessExample = ({message,}: {message: string}) => (
  <MessageBar
    messageBarType={MessageBarType.success}
    isMultiline={false}
  >
    {message}
  </MessageBar>
);


export const Form = () => {

  // Form state
  const [airtableApiUrl, setAirtableApiUrl,] = React.useState("")  
  const [airtableApiKey, setAirtableApiKey,] = React.useState("")  
  const [email, setEmail,] = React.useState("")  

  const [messageState, setMessageState,] = React.useState({
    isError: false,
    isSuccess: false,
    message: "",
  })  

  const onChangeAirtableApiUrl = React.useCallback(
    (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
      setAirtableApiUrl(newValue || "");
    },
    [],
  );
  const onChangeAirtableApiKey = React.useCallback(
    (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
      setAirtableApiKey(newValue || "");
    },
    [],
  );
  const onChangeEmailValue = React.useCallback(
    (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
      setEmail(newValue || "");
    },
    [],
  );

  const generateSwagger = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const res = await fetch(
      FN_URL,
      {
        body: JSON.stringify({
          email,
          airtable_url: airtableApiUrl,
          airtable_key: airtableApiKey,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    )

    const result = await res.json()
    if (res.status === 200) {
      setMessageState({
        isError: false,
        isSuccess: true,
        message: "Success! Please check your email",
      })
    } else {
      setMessageState({
        isError: true,
        isSuccess: false,
        message: result.error.message,
      })

    }
    console.log(result)
  }

  const validForm = (): boolean => {
    return (
      email.length > 0 &&
      emailError() === "" &&
      airtableApiUrl.length > 0 &&
      airtableApiUrlError() === "" &&
      airtableApiKey.length > 0
    )
  }

  const emailError = (): string => {
    if (email === "") {
      return ""
    }
    if (!EMAIL_REGEX.test(email)) {
      return "Valid email required"
    }
    return ""
  }

  const airtableApiUrlError = (): string => {
    if (airtableApiUrl === "") {
      return ""
    }
    if (!API_URL_REGEX.test(airtableApiUrl)) {
      return "Please check your Airtable API url"
    }
    return ""
  }


  return (
    <div style={{width:"50%", minWidth: "350px", maxWidth: "600px",}}>
      {messageState.isError && <SevereExample message={messageState.message} />}
      {messageState.isSuccess && <SuccessExample message={messageState.message} />}
      <form onSubmit={generateSwagger}>
        <Stack tokens={stackTokens}>
          <TextField
            label="Airtable API URL"
            placeholder="https://api.airtable.com/v0/appABC123/MyTable"
            value={airtableApiUrl}
            errorMessage={airtableApiUrlError()}
            onChange={onChangeAirtableApiUrl}
            styles={textFieldStyles}
          />
          <TextField
            label="Airtable API Key"
            placeholder="key123"
            value={airtableApiKey}
            onChange={onChangeAirtableApiKey}
            styles={narrowTextFieldStyles}
          />
          <TextField
            label="Email Address to send Swagger file to"
            onChange={onChangeEmailValue}
            value={email}
            errorMessage={emailError()}
            styles={textFieldStyles}
          />
          <PrimaryButton text="Generate Swagger File" type="submit" disabled={!validForm()} />
        </Stack>
      </form>

    </div>
  )
}