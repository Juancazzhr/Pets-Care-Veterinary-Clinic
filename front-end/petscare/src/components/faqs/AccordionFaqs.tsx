import React from "react";
import { FaqsType } from "../faqs/faqsData";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function accordionFaqs({ id, question, answer }: FaqsType) {
  return (
    <div key={id}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            margin: "5px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              color: "#573469",
            }}
          >
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
