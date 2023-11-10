package petsCare.msappointment.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="Appointments")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column
    private String description;
    @Column
    private String thumbnail_URL;
}
