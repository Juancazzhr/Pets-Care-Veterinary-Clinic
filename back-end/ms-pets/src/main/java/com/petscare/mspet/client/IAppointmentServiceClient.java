package com.petscare.mspet.client;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Date;
import java.util.List;

@FeignClient(name = "ms-appointment")
public interface IAppointmentServiceClient {

    @GetMapping("/v1/appointments")
    List<AppointmentDTO> listAllApointments();

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    class AppointmentDTO{
        private Long id;
        private Date date;
        private Long professionalID;
        private Long petID;
        private Long serviceID;
    }
}
