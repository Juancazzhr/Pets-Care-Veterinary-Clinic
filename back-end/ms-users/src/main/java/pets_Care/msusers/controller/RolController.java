package pets_Care.msusers.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pets_Care.msusers.model.Rol;
import pets_Care.msusers.service.RolService;

import java.util.List;

@RestController
@RequestMapping("v1/roles")
public class RolController {

    RolService service;

    public RolController(RolService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<String> create(@RequestBody Rol rol){
      service.createRol(rol);
      return ResponseEntity.status(HttpStatus.CREATED).body("Rol Successfully created.");
    }

    @GetMapping
    public List<Rol> listAll(){
        return service.listRoles();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws Exception {
        if(service.searchRolById(id).isPresent()){
            service.deleteRol(id);
            return ResponseEntity.ok("Rol successfully deleted.");
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Rol with id "+id+" doesn't exist.");
        }
    }
}
