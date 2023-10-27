package petcareveterinary.employees.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="Services")
public class ProfessionalService {

    @Id
    private Long id;
    @Column
    private String name;
    @Column
    private String description;
    @Column
    private String thumbnail;
}
