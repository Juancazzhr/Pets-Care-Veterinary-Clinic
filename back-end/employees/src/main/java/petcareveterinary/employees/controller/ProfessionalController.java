package petcareveterinary.employees.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import petcareveterinary.employees.model.Professional;
import petcareveterinary.employees.service.ProfessionalService;

import java.util.List;

@RestController
@RequestMapping("v1/professionals")
public class ProfessionalController {

    ProfessionalService service;

    public ProfessionalController(ProfessionalService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<String> crear(@RequestBody Professional professional){
        service.createProfessional(professional);
        return ResponseEntity.status(HttpStatus.CREATED).body("Empleado creado correctamente");
    }

    @GetMapping
    public List<Professional> listarTodos(){
        return service.listProfessionals();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Professional> buscarPorId(@PathVariable Long id){
        if(service.searchProfessionalById(id).isPresent()){
            return ResponseEntity.ok(service.searchProfessionalById(id).get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping
    public  ResponseEntity<Professional> actualizar(@RequestBody Professional professional) throws Exception {
        if(service.searchProfessionalById(professional.getId()).isPresent()){
            return ResponseEntity.ok(service.updateProfessional(professional));
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("El empleado con el id "+ professional.getId()+ " no existe");
            throw new Exception();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Long id) throws Exception {
        if (service.searchProfessionalById(id).isPresent()){
            service.deleteProfessional(id);
            return ResponseEntity.ok("El empleado fue eliminado correctamente");
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("El empleado con el id "+id+" no existe");
            throw new Exception();
        }
    }

}
