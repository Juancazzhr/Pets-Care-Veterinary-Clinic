package petsCare.msappointment.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import petsCare.msappointment.model.Appointment;
import petsCare.msappointment.service.AppointmentService;

import java.util.List;

@RestController
@RequestMapping("v1/appointments")
public class AppointmentController {

    AppointmentService service;

    public AppointmentController(AppointmentService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<String> create(@RequestBody Appointment appointment){
        service.createAppointment(appointment);
        return ResponseEntity.status(HttpStatus.CREATED).body("The appointment was successfully created.");
    }

    @GetMapping
    public List<Appointment> listAll(){
        return service.listAppointments();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Appointment> searchById(@PathVariable Long id){
        if(service.searchAppointmentById(id).isPresent()){
            return ResponseEntity.ok(service.searchAppointmentById(id).get());
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping
    public ResponseEntity<Appointment> update(@RequestBody Appointment appointment) throws Exception{
        if(service.searchAppointmentById(appointment.getId()).isPresent()){
            return ResponseEntity.ok(service.updateAppointment(appointment));
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("The appointment with id "+appointment.getId()+ " doesn't exist.");
            throw new Exception();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) throws Exception{
        if(service.searchAppointmentById(id).isPresent()){
            service.deleteAppointment(id);
            return ResponseEntity.ok("The appointment was successfully deleted.");
        }else{
            ResponseEntity.status(HttpStatus.NOT_FOUND).body("The appointment with id "+id+" doesn't exist.");
            throw new Exception();
        }
    }
}
