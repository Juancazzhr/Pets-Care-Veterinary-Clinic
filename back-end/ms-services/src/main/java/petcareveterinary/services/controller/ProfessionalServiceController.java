package petcareveterinary.services.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import petcareveterinary.services.model.ProfessionalService;
import petcareveterinary.services.service.ProfessionalServiceService;

import java.util.List;

@RestController
@RequestMapping("/v1/services")
public class ProfessionalServiceController {

    ProfessionalServiceService professionalServiceService;

    public ProfessionalServiceController(ProfessionalServiceService professionalServiceService) {
        this.professionalServiceService = professionalServiceService;
    }

    @Operation(summary = "Get all professional services")
    @GetMapping
    public List<ProfessionalService> findAll() {
        return professionalServiceService.listProfessionalServices();
    }

    @Operation(summary = "Create a new professional service")
    @PostMapping
    public ResponseEntity<String> create(@RequestBody ProfessionalService professionalService) {
        professionalServiceService.createProfessionalService(professionalService);
        return ResponseEntity.status(HttpStatus.CREATED).body("Service created successfully.");
    }

    @Operation(summary = "Get a professional service by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the professional service",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ProfessionalService.class)) }),
            @ApiResponse(responseCode = "404", description = "Professional service not found",
                    content = @Content)
    })
    @GetMapping("/{id}")
    public ResponseEntity<ProfessionalService> searchById(@Parameter(description = "ID of the professional service to be searched")
                                                          @PathVariable Long id) throws Exception {
        if (professionalServiceService.searchProfessionalServiceById(id).isPresent()) {
            return ResponseEntity.ok(professionalServiceService.searchProfessionalServiceById(id).get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @Operation(summary = "Update an existing professional service")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Updated the professional service",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ProfessionalService.class)) }),
            @ApiResponse(responseCode = "404", description = "Professional service not found",
                    content = @Content)
    })
    @PutMapping
    public ResponseEntity<ProfessionalService> update(@RequestBody ProfessionalService professionalService) throws Exception {
        if (professionalServiceService.searchProfessionalServiceById(professionalService.getId()).isPresent()) {
            return ResponseEntity.ok(professionalServiceService.updateProfessionalService(professionalService));
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Service with id " + professionalService.getId() + " does not exist. Please check the service id and try again.");
            throw new Exception();
        }
    }

    @Operation(summary = "Delete a professional service by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Professional service deleted"),
            @ApiResponse(responseCode = "404", description = "Professional service not found",
                    content = @Content)
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@Parameter(description = "ID of the professional service to be deleted")
                                        @PathVariable Long id) throws Exception {
        if (professionalServiceService.searchProfessionalServiceById(id).isPresent()) {
            professionalServiceService.deleteProfessionalService(id);
            return ResponseEntity.ok("Service deleted successfully.");
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("Service with id " + id + " does not exist. Please check the service id and try again.");
            throw new Exception();
        }
    }
}
