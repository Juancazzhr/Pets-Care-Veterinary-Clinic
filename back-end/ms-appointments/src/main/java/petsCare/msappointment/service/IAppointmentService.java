package petsCare.msappointment.service;

import petsCare.msappointment.model.Appointment;

import java.util.List;
import java.util.Optional;

public interface IAppointmentService {

    List<Appointment> listAppointments();
    Optional<Appointment> searchAppointmentById(Long id);
    Appointment createAppointment(Appointment appointment);
    void deleteAppointment(Long id) throws Exception;
    Appointment updateAppointment(Appointment appointment) throws Exception;
}
