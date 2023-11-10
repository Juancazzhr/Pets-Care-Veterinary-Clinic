package petcareveterinary.services.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import petcareveterinary.services.model.ProfessionalService;
import petcareveterinary.services.service.ProfessionalServiceService;

import java.util.List;

@RestController
@RequestMapping("v1/services")
public class ProfessionalServiceController {
    ProfessionalServiceService professionalServiceService;

    public ProfessionalServiceController(ProfessionalServiceService professionalServiceService) {
        this.professionalServiceService = professionalServiceService;
    }

    @GetMapping
    public List<ProfessionalService> findAll(){
        return professionalServiceService.listProfessionalServices();
    }

    @PostMapping
    public ResponseEntity<String> create(@RequestBody ProfessionalService professionalService){
        professionalServiceService.createProfessionalService(professionalService);
        return ResponseEntity.status(HttpStatus.CREATED).body("Service created successfully.");
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProfessionalService> searchById(@PathVariable Long id) throws Exception {
        if(professionalServiceService.searchProfessionalServiceById(id).isPresent()){
            return ResponseEntity.ok(professionalServiceService.searchProfessionalServiceById(id).get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping
    public  ResponseEntity<ProfessionalService> update(@RequestBody ProfessionalService professionalService) throws Exception {
        if(professionalServiceService.searchProfessionalServiceById(professionalService.getId()).isPresent()){
            return ResponseEntity.ok(professionalServiceService.updateProfessionalService(professionalService));
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Service with id "+ professionalService.getId()+ " does not exist. Please check the service id and try again.");
            throw new Exception();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id) throws Exception {
        if (professionalServiceService.searchProfessionalServiceById(id).isPresent()){
            professionalServiceService.deleteProfessionalService(id);
            return ResponseEntity.ok("Service deleted successfully.");
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Service with id "+id+" does not exist. Please check the service id and try again.");
            throw new Exception();
        }
    }
}
