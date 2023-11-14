package com.petscare.mspet.client;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDate;
import java.util.List;

@FeignClient(name = "ms-consult")
public interface IConsultServiceClient {

    @GetMapping("/v1/consults")
    List<ConsultDTO> listAllConsults();

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    class ConsultDTO{
        private Long id;
        private LocalDate cratedAt;
        private String diagnostic;
        private String drugs;
        private String exams;
        private Long petClinicalHistoryId;
    }
}
