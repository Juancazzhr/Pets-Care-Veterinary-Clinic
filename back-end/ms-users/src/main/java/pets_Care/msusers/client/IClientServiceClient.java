package pets_Care.msusers.client;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@FeignClient(name = "ms-clients")
public interface IClientServiceClient {

    @GetMapping("/v1/clients")
    List<ClientDTO> listClients();

    @GetMapping("/v1/clients/{id}")
    Optional<ClientDTO> listClientById(@PathVariable (value = "id") Long id);

    @PostMapping("/v1/clients")
    ResponseEntity<String> createClient(@RequestBody ClientDTO clientDTO);

    @DeleteMapping("/v1/clients/{id}")
    void deleteClient(@PathVariable (value = "id") Long id);

    @PutMapping("/v1/clients")
    void updateClient(@RequestBody ClientDTO clientDTO);

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    class ClientDTO{
        private Long id;
        private Long userId;

        public ClientDTO(Long userId) {
            this.userId = userId;
        }
    }
}
