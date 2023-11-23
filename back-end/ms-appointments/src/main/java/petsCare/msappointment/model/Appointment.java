package petsCare.msappointment.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name="Appointments")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private Date date;
    @Column(name = "professional_id")
    private Long professionalID;
    @Column(name = "pet_id")
    private Long petID;
    @Column(name = "service_id")
    private Long serviceID;

}
