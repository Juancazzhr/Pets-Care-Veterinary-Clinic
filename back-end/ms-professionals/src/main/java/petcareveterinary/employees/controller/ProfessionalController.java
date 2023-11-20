package petcareveterinary.employees.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import petcareveterinary.employees.client.IAppointmentServiceClient;
import petcareveterinary.employees.client.IServicesProfessionalServiceClient;
import petcareveterinary.employees.model.Professional;
import petcareveterinary.employees.service.ProfessionalService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/v1/professionals")
public class ProfessionalController {

    ProfessionalService service;

    public ProfessionalController(ProfessionalService service) {
        this.service = service;
    }

    @Operation(summary = "Create a new professional")
    @PostMapping
    ResponseEntity<String> crear(@RequestBody Professional professional) {
        service.createProfessional(professional);
        return ResponseEntity.status(HttpStatus.CREATED).body("Empleado creado correctamente");
    }

    @Operation(summary = "Get all professionals")
    @GetMapping
    List<Professional> listarTodos() {
        return service.listProfessionals();
    }

    @Operation(summary = "Get a professional by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the professional",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = Professional.class)) }),
            @ApiResponse(responseCode = "404", description = "Professional not found",
                    content = @Content)
    })
    @GetMapping("/{id}")
    ResponseEntity<Professional> buscarPorId(@Parameter(description = "ID of the professional to be searched")
                                             @PathVariable Long id) {
        if (service.searchProfessionalById(id).isPresent()) {
            return ResponseEntity.ok(service.searchProfessionalById(id).get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @Operation(summary = "Update an existing professional")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Updated the professional",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = Professional.class)) }),
            @ApiResponse(responseCode = "404", description = "Professional not found",
                    content = @Content)
    })
    @PutMapping
    ResponseEntity<Professional> actualizar(@RequestBody Professional professional) throws Exception {
        if (service.searchProfessionalById(professional.getId()).isPresent()) {
            return ResponseEntity.ok(service.updateProfessional(professional));
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("El empleado con el id " + professional.getId() + " no existe");
            throw new Exception();
        }
    }

    @Operation(summary = "Delete a professional by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Professional deleted"),
            @ApiResponse(responseCode = "404", description = "Professional not found",
                    content = @Content)
    })
    @DeleteMapping("/{id}")
    ResponseEntity<String> eliminar(@Parameter(description = "ID of the professional to be deleted")
                                    @PathVariable Long id) throws Exception {
        if (service.searchProfessionalById(id).isPresent()) {
            service.deleteProfessional(id);
            return ResponseEntity.ok("El empleado fue eliminado correctamente");
        } else {
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("El empleado con el id " + id + " no existe");
            throw new Exception();
        }
    }

    @Operation(summary = "Get all professional appointments")
    @GetMapping("/appointments")
    List<ProfessionalAppointments> listAll() {
        List<ProfessionalAppointments> professionalAppointments = new ArrayList<>();
        List<Professional> professionals = service.listProfessionals();
        List<IAppointmentServiceClient.AppointmentDTO> appointmentsDTO = service.listAppointments();
        List<IServicesProfessionalServiceClient.ServiceDTO> servicesDTOS = service.listServices();
        for (Professional professional : professionals) {
            List<AppointmentsServices> appointmentsServices = new ArrayList<>();
            for (IAppointmentServiceClient.AppointmentDTO appointmentDTO : appointmentsDTO) {
                for (IServicesProfessionalServiceClient.ServiceDTO serviceDTO : servicesDTOS) {
                    if (appointmentDTO.getServiceID() == serviceDTO.getId()) {
                        if (professional.getId() == (appointmentDTO.getProfessionalID())) {
                            AppointmentsServices appointmentsServicesSearched = new AppointmentsServices(appointmentDTO, serviceDTO);
                            appointmentsServices.add(appointmentsServicesSearched);
                        }
                    }
                }
            }
            if (!appointmentsServices.isEmpty()) {
                ProfessionalAppointments professionalsAppointments = new ProfessionalAppointments(professional, appointmentsServices);
                professionalAppointments.add(professionalsAppointments);
            }
        }
        return professionalAppointments;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    static class ProfessionalAppointments {
        Professional professional;
        List<AppointmentsServices> appointmentServices = new ArrayList<>();
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    static class AppointmentsServices {
        IAppointmentServiceClient.AppointmentDTO appointmentDTO;
        IServicesProfessionalServiceClient.ServiceDTO serviceDTO;
    }
}
