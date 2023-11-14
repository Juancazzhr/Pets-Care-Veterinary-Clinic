package petcareveterinary.services.model;

import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
@Table(name = "Services")
public class ProfessionalService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String name;
    @Column
    private String description;
    @Column
    private String thumbnail;
}





