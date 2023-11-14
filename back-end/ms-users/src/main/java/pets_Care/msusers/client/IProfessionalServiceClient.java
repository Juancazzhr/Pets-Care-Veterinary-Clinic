package pets_Care.msusers.client;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@FeignClient(name = "ms-professionals")
public interface IProfessionalServiceClient {

    @GetMapping("/v1/professionals")
    List<ProfessionalDTO> listProfessionals();

    @GetMapping("/v1/professionals/{id}")
    Optional<ProfessionalDTO> listProfessionalById(@PathVariable (value = "id") Long id);

    @PostMapping("/v1/professionals")
    ResponseEntity<String> createProfessional(@RequestBody ProfessionalDTO professionalDTO);

    @DeleteMapping("/v1/professionals/{id}")
    void deleteProfessional(@PathVariable (value = "id") Long id);

    @PutMapping("/v1/professionals")
    void updateProfessional(@RequestBody ProfessionalDTO professionalDTO);

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    class ProfessionalDTO{
        private Long Id;
        private String licenseNumber;
        private Long userId;

        public ProfessionalDTO(String licenseNumber, Long userId) {
            this.licenseNumber = licenseNumber;
            this.userId = userId;
        }
    }
}
