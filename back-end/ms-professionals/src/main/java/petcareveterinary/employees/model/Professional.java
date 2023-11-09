package petcareveterinary.employees.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="Professionals")
public class Professional {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @Column
    private String licenseNumber;
}
