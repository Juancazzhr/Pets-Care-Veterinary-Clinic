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
    private Long phone;
    @Column
    private String email;
    @Column
    private String password;
    @ManyToOne(fetch = FetchType.EAGER)
    private Rol rol;

    public User() {
    }

    public User(Long id, String firstName, String lastName, String address, Long phone, String email, String password, Rol rol) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.rol = rol;
    }

    public User(String firstName, String lastName, String address, Long phone, String email, String password, Rol rol) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.rol = rol;
    }
}
