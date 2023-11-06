package petcareveterinary.employees.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="Photos Professionals")
public class ProfessionalPhoto {

    @Id
    private Long id;
    @Column
    private String photoURL;
}
