/*
package petcareveterinary.employees.client;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.cloud.loadbalancer.annotation.LoadBalancerClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import petcareveterinary.employees.config.LoadBalanceConfiguration;

import java.time.LocalDate;
import java.util.Optional;

@FeignClient(name="user-service")
@LoadBalancerClient(value="user-service", configuration = LoadBalanceConfiguration.class)
public interface PetClinicalHistoryClient {

    @GetMapping("/v1/pets/clinical-history/{id}")
    Optional<PetClinicalHistoryDTO> searchClinicalHistoryById(@PathVariable(value = "id") Long id);

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    class PetClinicalHistoryDTO {

        private Long id;
        private LocalDate cratedAt;
        private LocalDate lastUpdate;
        private Double weigth;
        private Pet pet;

        @Getter
        @Setter
        @NoArgsConstructor
        @AllArgsConstructor
        public static class Pet {
            private Long id;
            private String name;
            private String size;
            private String race;
            private PetType petType;
            private User user;

            @Getter
            @Setter
            @NoArgsConstructor
            @AllArgsConstructor
            public static class PetType {
                private Long id;
                private String typeName;
            }

            @Getter
            @Setter
            @NoArgsConstructor
            @AllArgsConstructor
            public static class User{
                private Long id;
                private String firstName;
                private String lastName;
                private String address;
                private String email;
                private String phone;
            }

        }


    }

}


*/
