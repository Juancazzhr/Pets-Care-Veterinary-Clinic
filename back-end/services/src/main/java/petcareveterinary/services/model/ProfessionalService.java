package petcareveterinary.services.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="Services")
public class ProfessionalService {
    @Id
    @SequenceGenerator(name="service_sequence", sequenceName = "service_sequence")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "service_sequence")
    private Long Id;
    @Column
    private String name;
    @Column
    private String description;
    @Column
    private String thumbnail;
}
