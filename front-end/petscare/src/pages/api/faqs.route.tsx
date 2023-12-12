import { FaqsType, faqsData } from "../../components/faqs/faqsData";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<FaqsType[]>){
    res.status(200).json(faqsData)
}