import styled from "styled-components";
import AppLogo from "../../icons/appLogo";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const AccountInfoContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start", // Align to the left
  borderRadius: "8px",
  margin: "5px 10px", // Reduce margin
});
const Text = styled(Typography)({
  color: "white",
});

const AccountInfo = () => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const fetchTotalTransactions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/transaction/totalAmount"
        );
        setAmount(response.data);
      } catch (error) {
        console.error("Error fetching total transactions:", error);
      }
    };

    fetchTotalTransactions();
  }, []);
  return (
    <AccountInfoContainer>
      <div style={{ height: "30px", width: "30px" }}>
        <AppLogo />
      </div>
      <Text>Account Balance</Text>
      <Text style={{ fontWeight: 600, marginTop: "10px", fontSize: 18 }}>
        {`$${amount.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`}
      </Text>
    </AccountInfoContainer>
  );
};

export default AccountInfo;
