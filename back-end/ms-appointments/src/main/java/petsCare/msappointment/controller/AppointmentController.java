package petsCare.msappointment.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import petsCare.msappointment.model.Appointment;
import petsCare.msappointment.service.AppointmentService;

import java.util.List;

@RestController
@RequestMapping("/v1/appointments")
public class AppointmentController {

    AppointmentService service;

    public AppointmentController(AppointmentService service) {
        this.service = service;
    }

    @Operation(summary = "Create a new appointment")
    @PostMapping
    public ResponseEntity<String> create(@RequestBody Appointment appointment){
        service.createAppointment(appointment);
        return ResponseEntity.status(HttpStatus.CREATED).body("The appointment was successfully created.");
    }

    @Operation(summary = "Get all appointments")
    @GetMapping
    public List<Appointment> listAll(){
        return service.listAppointments();
    }

    @Operation(summary = "Get an appointment by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the appointment",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = Appointment.class)) }),
            @ApiResponse(responseCode = "404", description = "Appointment not found",
                    content = @Content)
    })
    @GetMapping("/{id}")
    public ResponseEntity<Appointment> searchById(@Parameter(description = "ID of the appointment to be searched")
                                                  @PathVariable Long id){
        if(service.searchAppointmentById(id).isPresent()){
            return ResponseEntity.ok(service.searchAppointmentById(id).get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @Operation(summary = "Update an existing appointment")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Updated the appointment",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = Appointment.class)) }),
            @ApiResponse(responseCode = "404", description = "Appointment not found",
                    content = @Content)
    })
    @PutMapping
    public ResponseEntity<Appointment> update(@RequestBody Appointment appointment) throws Exception{
        if(service.searchAppointmentById(appointment.getId()).isPresent()){
            return ResponseEntity.ok(service.updateAppointment(appointment));
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("The appointment with id "+appointment.getId()+ " doesn't exist.");
            throw new Exception();
        }
    }

    @Operation(summary = "Delete an appointment by ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Appointment deleted"),
            @ApiResponse(responseCode = "404", description = "Appointment not found",
                    content = @Content)
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@Parameter(description = "ID of the appointment to be deleted")
                                         @PathVariable Long id) throws Exception{
        if(service.searchAppointmentById(id).isPresent()){
            service.deleteAppointment(id);
            return ResponseEntity.ok("The appointment was successfully deleted.");
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("The appointment with id "+id+" doesn't exist.");
            throw new Exception();
        }
    }
}
