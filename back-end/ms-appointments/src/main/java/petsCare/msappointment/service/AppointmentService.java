package petsCare.msappointment.service;

import org.springframework.stereotype.Service;
import petsCare.msappointment.model.Appointment;
import petsCare.msappointment.repository.IAppointmentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService implements IAppointmentService{

    IAppointmentRepository repository;

    public AppointmentService(IAppointmentRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Appointment> listAppointments() {
        return repository.findAll();
    }

    @Override
    public Optional<Appointment> searchAppointmentById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Appointment createAppointment(Appointment appointment) {
        return repository.save(appointment);
    }

    @Override
    public void deleteAppointment(Long id) throws Exception {
        Optional<Appointment> appointmentSearched = searchAppointmentById(id);
        if(appointmentSearched.isPresent()){
            repository.deleteById(id);
        }else{
            throw new Exception("The appointment with id "+id+" doesn't exist.");
        }
    }

    @Override
    public Appointment updateAppointment(Appointment appointment) throws Exception {
        Optional<Appointment> appointmentSearched = searchAppointmentById(appointment.getId());
        if(appointmentSearched.isPresent()){
            return repository.save(appointment);
        }else{
            throw new Exception("The appointment with id "+ appointment.getId()+" doesn't exist.");
        }
    }
}
