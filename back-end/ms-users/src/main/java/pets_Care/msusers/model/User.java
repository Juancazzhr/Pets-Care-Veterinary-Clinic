package pets_Care.msusers.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private String address;
    @Column
    private int phone;
    @Column
    private String email;
    @Column
    private String password;
    @ManyToOne(fetch = FetchType.EAGER)
    private Rol rol;
}
