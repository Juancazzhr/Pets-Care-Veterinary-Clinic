package petsCare.msappointment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import petsCare.msappointment.model.Appointment;

@Repository
public interface IAppointmentRepository extends JpaRepository<Appointment, Long> {
}
