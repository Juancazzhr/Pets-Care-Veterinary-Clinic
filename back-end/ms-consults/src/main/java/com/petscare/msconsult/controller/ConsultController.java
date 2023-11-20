package com.petscare.msconsult.controller;

import com.petscare.msconsult.model.Consult;
import com.petscare.msconsult.service.ConsultService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/consults")
public class ConsultController {
    ConsultService consultService;

    public ConsultController(ConsultService consultService) {
        this.consultService = consultService;
    }

    @Operation(summary = "Create a new consultation")
    @PostMapping
    public ResponseEntity<String> createConsult(@RequestBody Consult consult) {
        consultService.createConsult(consult);
        return ResponseEntity.status(HttpStatus.CREATED).body("Consulta creada correctamente");
    }

    @Operation(summary = "Get all consultations")
    @GetMapping
    public List<Consult> getAllConsult() {
        return consultService.getAllConsult();
    }

    @Operation(summary = "Get a consultation by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the consultation",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = Consult.class)) }),
            @ApiResponse(responseCode = "404", description = "Consultation not found",
                    content = @Content)
    })
    @GetMapping("/{id}")
    public ResponseEntity<Object> searchConsultById(@Parameter(description = "ID of the consultation to be searched")
                                                    @PathVariable Long id) {
        if (consultService.getConsultById(id).isPresent()) {
            return ResponseEntity.ok(consultService.getConsultById(id).get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La consulta con el id " + id + " no existe");
        }
    }

    @Operation(summary = "Update an existing consultation")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Updated the consultation",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = Consult.class)) }),
            @ApiResponse(responseCode = "404", description = "Consultation not found",
                    content = @Content)
    })
    @PutMapping("/{id}")
    public ResponseEntity<Consult> updateConsult(@RequestBody Consult consult) throws Exception {
        if (consultService.getConsultById(consult.getId()).isPresent()) {
            return ResponseEntity.ok(consultService.updateConsult(consult));
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("La consulta con el id " + consult.getId() + " no existe");
            throw new Exception();
        }
    }

    @Operation(summary = "Delete a consultation by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Consultation deleted"),
            @ApiResponse(responseCode = "404", description = "Consultation not found",
                    content = @Content)
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteConsult(@Parameter(description = "ID of the consultation to be deleted")
                                                @PathVariable Long id) throws Exception {
        if (consultService.getConsultById(id).isPresent()) {
            consultService.deleteConsult(id);
            return ResponseEntity.ok("La consulta fue eliminada correctamente");
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("La consulta con el id " + id + " no existe");
            throw new Exception();
        }
    }
}
