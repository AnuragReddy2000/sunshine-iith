import React, { useState, useEffect,useContext } from "react";
import Logo from "../images/logo.png";
import TextField from "@mui/material/TextField";
import { UserContext } from "../layouts";
import * as styles from "../components/Css/schedule.module.css";
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import Stack from "@mui/material/Stack";
import TimePicker from "@mui/lab/TimePicker";
import "react-datepicker/dist/react-datepicker.css";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const steps = [
  {
    label: "Select a counsellor for the session",
  },
  {
    label: "Select the mode of session.",
  },
  {
    label: "Pick a date and time for the session",
  },
  {
    label: "Select your prefered mode of communication",
  },
];

export default function slotconfirmation() {
  const [counsellor, setCounsellor] = useState("D. Phani Bhushan");
  const [OnlineorOffline, setOnlineorOffline] = useState("Offline");
  const [selectedDate, setselectedDate] = useState(new Date());
  const { user, signinwithGoogle, signout } = useContext(UserContext);
  const [username, setUser] = useState(null);
  const [value, setValue] = React.useState<Date | null>(
    new Date("2020-01-01 09:00")
  );
  useEffect(() => {
    if (user) {
      setUser((username) => user.displayName);
    }
  }, [user]);
  const [modeofComm, setmodeofComm] = useState("Whatsapp");
  const [activeStep, setActiveStep] = React.useState(0);
  const phonenum = {
    "D. Phani Bhushan": "91-8331036082",
    "Maria Morris": "91-8331036081",
    "Yukti Rastogi": "91-83310 36080",
  };
  const mail = {
    "D. Phani Bhushan": "phani.bhushan@admin.iith.ac.in",
    "Maria Morris": "maria.morris@admin.iith.ac.in",
    "Yukti Rastogi": "yukti.rastogi@admin.iith.ac.in",
  };
  const salutations = {
    "D. Phani Bhushan": "Sir",
    "Maria Morris": "Madam",
    "Yukti Rastogi": "Madam",
  };
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function scheduleSlot(){
    const url = modeofComm === "Mail"
    ? `mailto:${mail[counsellor]}?subject=Regarding Slot for a Session&body=${text}`
    : `https://api.whatsapp.com/send?phone=${phonenum[counsellor]}&text=${text}`;
    window.open(url,"_blank").focus();
    window.location.href = "/home";
  }

  let text: string = "";
  if (value.getHours() < 12) {
    if (value.getMinutes() >= 10) {
      text = `Hi ${
        salutations[counsellor]
      } I am ${username}. I was wondering if I could meet you for an ${OnlineorOffline} session on ${
        days[selectedDate.getDay()]
      } ${selectedDate.getDate()}-${selectedDate.getMonth()}-${selectedDate.getFullYear()}  at ${value.getHours()}:${value.getMinutes()}AM`;
    } else {
      text = `Hi ${
        salutations[counsellor]
      } I am ${username}. I was wondering if I could meet you for an ${OnlineorOffline} session on ${
        days[selectedDate.getDay()]
      } ${selectedDate.getDate()}-${selectedDate.getMonth()}-${selectedDate.getFullYear()}  at ${value.getHours()}:0${value.getMinutes()}AM`;
    }
  } else if (value.getHours() == 12) {
    if (value.getMinutes() >= 10) {
      text = `Hi ${
        salutations[counsellor]
      } I am ${username}. I was wondering if I could meet you for an ${OnlineorOffline} session on ${
        days[selectedDate.getDay()]
      } ${selectedDate.getDate()}-${selectedDate.getMonth()}-${selectedDate.getFullYear()}  at ${value.getHours()}:${value.getMinutes()}PM`;
    } else {
      text = `Hi ${
        salutations[counsellor]
      } I am ${username}. I was wondering if I could meet you for an ${OnlineorOffline} session on ${
        days[selectedDate.getDay()]
      } ${selectedDate.getDate()}-${selectedDate.getMonth()}-${selectedDate.getFullYear()}  at ${value.getHours()}:0${value.getMinutes()}PM`;
    }
  } else {
    if (value.getMinutes() >= 10) {
      text = `Hi ${
        salutations[counsellor]
      } I am ${username}. I was wondering if I could meet you for an ${OnlineorOffline} session on ${
        days[selectedDate.getDay()]
      } ${selectedDate.getDate()}-${selectedDate.getMonth()}-${selectedDate.getFullYear()}  at ${
        value.getHours() - 12
      }:${value.getMinutes()}PM`;
    } else {
      text = `Hi ${
        salutations[counsellor]
      } I am ${username}. I was wondering if I could meet you for an ${OnlineorOffline} session on ${
        days[selectedDate.getDay()]
      } ${selectedDate.getDate()}-${selectedDate.getMonth()}-${selectedDate.getFullYear()}  at ${
        value.getHours() - 12
      }:0${value.getMinutes()}PM`;
    }
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  let currentdate = new Date();
  currentdate.setDate(currentdate.getDate() + 7);
  return (
    <>
      <div className="Header">
        <div
          className="ColourThis"
          style={{ height: "15vh", background: "#F2BA49" }}
        />
        <img alt="Sunshine IITH" src={Logo} className={styles.image} />
      </div>
      <Container maxWidth="sm" style={{ marginTop: "-48px" }}>
        <Typography
          variant="h3"
          style={{
            marginBottom: "2vh",
            fontWeight: 540,
            fontFamily: ["Sora", "sans-serif"].join(","),
            fontSize: "2.4rem",
          }}
          className="BookSlot"
        >
          Book Slot Now
        </Typography>
        <Box sx={{ maxWidth: 400 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 3 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  {index === 0 ? (
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="Our Counsellors"
                        defaultValue="D. Phani Bhushan"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="D. Phani Bhushan"
                          control={<Radio />}
                          label="D. Phani Bhushan"
                          checked={counsellor === "D. Phani Bhushan"}
                          onClick={() => setCounsellor("D. Phani Bhushan")}
                        />
                        <FormControlLabel
                          value="Maria Morris"
                          control={<Radio />}
                          label="Maria Morris"
                          checked={counsellor === "Maria Morris"}
                          onClick={() => setCounsellor("Maria Morris")}
                        />
                        <FormControlLabel
                          value="Yukti Rastogi"
                          control={<Radio />}
                          label="Yukti Rastogi"
                          checked={counsellor === "Yukti Rastogi"}
                          onClick={() => setCounsellor("Yukti Rastogi")}
                        />
                      </RadioGroup>
                    </FormControl>
                  ) : null}
                  {index === 3 ? (
                    <>
                      <FormControl component="fieldset">
                        <RadioGroup
                          aria-label="Our Counsellors"
                          defaultValue="Whatsapp"
                          name="radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Whatsapp"
                            control={<Radio />}
                            label="Whatsapp"
                            checked={modeofComm === "Whatsapp"}
                            onClick={() => setmodeofComm("Whatsapp")}
                          />
                          <FormControlLabel
                            value="Mail"
                            control={<Radio />}
                            label="Mail"
                            checked={modeofComm === "Mail"}
                            onClick={() => setmodeofComm("Mail")}
                          />
                        </RadioGroup>
                      </FormControl>
                    </>
                  ) : null}
                  {index === 2 ? (
                    <>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <MobileDatePicker
                        label="Date"
                        value={selectedDate}
                        onChange={(newDate)=>setselectedDate(newDate)}
                        renderInput={(params) => <TextField {...params} size="small" style={{ width: "175px" }}/>}
                        minDate={new Date()}
                        maxDate={currentdate}
                      />
                      <div style={{ marginTop: "1.5vh" }} />
                      
                        <Stack spacing={3}>
                          <TimePicker
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                size="small"
                                style={{ width: "175px" }}
                              />
                            )}
                            value={value}
                            label="Time"
                            onChange={(newValue) => {
                              setValue(newValue);
                            }}
                            minTime={new Date(0, 0, 0, 9)}
                            maxTime={new Date(0, 0, 0, 17)}
                          />
                        </Stack>
                      </LocalizationProvider>
                      <div style={{ marginBottom: "1vh" }} />
                    </>
                  ) : null}
                  {index === 1 ? (
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="Choose Online Or Offline"
                        defaultValue="Offline"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="Online"
                          control={<Radio />}
                          label="Online"
                          checked={OnlineorOffline === "Online"}
                          onClick={() => setOnlineorOffline("Online")}
                        />
                        <FormControlLabel
                          value="Offline"
                          control={<Radio />}
                          label="Offline"
                          checked={OnlineorOffline === "Offline"}
                          onClick={() => setOnlineorOffline("Offline")}
                        />
                      </RadioGroup>
                    </FormControl>
                  ) : null}
                  <Box sx={{ mb: 2 }}>
                    <div>
                      {index === steps.length - 1 ? (
                        <a
                          target="_blank"
                          onClick={scheduleSlot}
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            variant="contained"
                            sx={{ mt: 1, mr: 1 }}
                          >
                            {" "}
                            Request Slot
                          </Button>
                        </a>
                      ) : (
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {" "}
                          Continue
                        </Button>
                      )}
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Container>
    </>
  );
}