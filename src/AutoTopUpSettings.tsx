// src/AutoTopUpSettings.tsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Switch,
  Typography,
  Slider,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Define a custom Material-UI theme
const theme = createTheme();

const AutoTopUpSettings: React.FC = () => {
  // State management
  const [isEnabled, setIsEnabled] = useState(true); // Auto top-up switch state
  const [dollars, setDollars] = useState(10); // Slider value for dollars

  // Map of dollar values to credits
  const dollarToCredits: { [key: number]: number } = {
    5: 500,
    10: 1200,
    15: 1700,
    20: 2500,
    25: 3900,
    30: 5000,
  };

  // Handler for toggling auto top-up switch
  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  // Handler for slider value change
  const handleSliderChange = (event: Event, value: number | number[]) => {
    if (typeof value === "number") {
      setDollars(value);
    }
  };

  // Handler for confirm button click
  const handleConfirm = () => {
    const credits = dollarToCredits[dollars];
    console.log(`Selected credits: ${credits} for $${dollars}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box sx={{ mt: 4 }}>
          {/* Container with styled box */}
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 8,
              padding: 2,
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              overflow: "hidden", // Prevent content overflow
            }}
          >
            {/* Title */}
            {/* <Typography variant="h5" gutterBottom>
              <b>Setup Auto Top-up</b>
            </Typography> */}

            {/* Auto Top-Up Switch */}
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 0 }}>
                <b>Setup Auto Top-up</b>
              </Typography>
              <Switch
                checked={isEnabled}
                onChange={handleToggle}
                inputProps={{ "aria-label": "auto top-up switch" }}
              />
            </Box>

            {/* Info message when auto top-up is off */}
            {!isEnabled && (
              <Typography variant="body2" sx={{ mt: 2 }}>
                Once the credit goes below the threshold value, credits can be
                auto purchased. Setup auto top-up to enjoy uninterrupted
                services. You can disable this anytime to stop auto top-up.
              </Typography>
            )}

            {/* Auto Top-Up Settings */}
            {isEnabled && (
              <Box sx={{ mt: 4 }}>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Once the credit goes below a minimum threshold{" "}
                  <span style={{ color: "purple" }}>
                    <b>50</b>
                  </span>
                  , we will auto-purchase{" "}
                  <span style={{ color: "purple" }}>
                    <b>1200</b>
                  </span>{" "}
                  credits and add them to your account.{" "}
                  <u>
                    <b>Learn more</b>
                  </u>
                  .
                </Typography>

                {/* Dollar Amount Slider */}

                <Slider
                  value={dollars}
                  sx={{
                    color: "#B139E6",
                    "&:hover": { color: "darkpurple" },
                  }}
                  min={5}
                  step={5}
                  max={30}
                  valueLabelDisplay="auto"
                  onChange={handleSliderChange}
                  marks={[
                    {
                      value: 5,
                      label: (
                        <Box sx={{ textAlign: "center", width: 20 }}>
                          <Typography sx={{ fontWeight: "bold" }}>
                            $5
                          </Typography>
                          <Typography
                            sx={{ fontSize: "0.75rem", color: "grey" }}
                          >
                            {dollarToCredits[5]} credits
                          </Typography>
                        </Box>
                      ),
                    },
                    {
                      value: 10,
                      label: (
                        <Box sx={{ textAlign: "left", width: 60 }}>
                          <Typography sx={{ fontWeight: "bold" }}>
                            $10
                          </Typography>
                          <Typography
                            sx={{ fontSize: "0.75rem", color: "grey" }}
                          >
                            {dollarToCredits[10]} credits
                          </Typography>
                        </Box>
                      ),
                    },
                    {
                      value: 15,
                      label: (
                        <Box sx={{ textAlign: "left", width: 60 }}>
                          <Typography sx={{ fontWeight: "bold" }}>
                            $15
                          </Typography>
                          <Typography
                            sx={{ fontSize: "0.75rem", color: "grey" }}
                          >
                            {dollarToCredits[15]} credits
                          </Typography>
                        </Box>
                      ),
                    },
                    {
                      value: 20,
                      label: (
                        <Box sx={{ textAlign: "left", width: 60 }}>
                          <Typography sx={{ fontWeight: "bold" }}>
                            $20
                          </Typography>
                          <Typography
                            sx={{ fontSize: "0.75rem", color: "grey" }}
                          >
                            {dollarToCredits[20]} credits
                          </Typography>
                        </Box>
                      ),
                    },
                    {
                      value: 25,
                      label: (
                        <Box sx={{ textAlign: "left", width: 60 }}>
                          <Typography sx={{ fontWeight: "bold" }}>
                            $25
                          </Typography>
                          <Typography
                            sx={{ fontSize: "0.75rem", color: "grey" }}
                          >
                            {dollarToCredits[25]} credits
                          </Typography>
                        </Box>
                      ),
                    },
                    {
                      value: 30,
                      label: (
                        <Box sx={{ textAlign: "left", width: 60 }}>
                          <Typography sx={{ fontWeight: "bold" }}>
                            $30
                          </Typography>
                          <Typography
                            sx={{ fontSize: "0.75rem", color: "grey" }}
                          >
                            {dollarToCredits[30]}
                          </Typography>
                        </Box>
                      ),
                    },
                  ]}
                  aria-labelledby="dollars-slider"
                />

                <br />
                <br />

                {/* Selected Amount and Credits */}
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Selected Amount: ${dollars}
                </Typography>
                <Typography variant="body2">
                  Credits: {dollarToCredits[dollars]}
                </Typography>

                {/* Confirm Button */}
                <Box sx={{ mt: 4 }}>
                  <Button
                    variant="contained"
                    onClick={handleConfirm}
                    sx={{
                      backgroundColor: "#B139E6",
                      "&:hover": { backgroundColor: "darkpurple" },
                    }}
                  >
                    Confirm auto-purchase
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AutoTopUpSettings;

// Ensuring file is treated as a module for typescript
export {};
