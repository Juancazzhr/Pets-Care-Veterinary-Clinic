package pets_Care.msusers.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
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

    @Operation(summary = "Create a new role")
    @PostMapping
    public ResponseEntity<String> create(@RequestBody Rol rol) {
        service.createRol(rol);
        return ResponseEntity.status(HttpStatus.CREATED).body("Rol Successfully created.");
    }

    @Operation(summary = "Get all roles")
    @GetMapping
    public List<Rol> listAll() {
        return service.listRoles();
    }

    @Operation(summary = "Delete a role by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Role deleted"),
            @ApiResponse(responseCode = "404", description = "Role not found",
                    content = @Content)
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@Parameter(description = "ID of the role to be deleted")
                                         @PathVariable Long id) throws Exception {
        if (service.searchRolById(id).isPresent()) {
            service.deleteRol(id);
            return ResponseEntity.ok("Rol successfully deleted.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Rol with id " + id + " doesn't exist.");
        }
    }
}
