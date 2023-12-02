import { AppointmentInput} from "@/interfaces";


export const postAppointment = async (data: AppointmentInput) => {

    const dataAppointment = JSON.stringify(data);
     /*  const response = await fetch(`${process.env.BASE_URL_BACK}appointments`) */
    const response = await fetch(`http://ec2-34-229-209-114.compute-1.amazonaws.com/dev/v1/appointments`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: dataAppointment
    });
    return await response;
};

 

