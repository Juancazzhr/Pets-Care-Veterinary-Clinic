package petcareveterinary.employees.model;

import petcareveterinary.employees.model.ProfessionalService;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
@Table(name="Professionals")
public class Professional {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    @Column
    private String name;
    @Column
    private String lastName;
    @Column
    private String licenseNumber;
    @ManyToMany
    private Set<ProfessionalService> services = new HashSet<ProfessionalService>();
    //@ManyToMany
    //private List<Turn> turns;
}
