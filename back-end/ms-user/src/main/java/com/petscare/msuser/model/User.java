package com.petscare.msuser.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@Entity
@Table(name="Users")
public class User {

    @Id
    @SequenceGenerator(name="user_sequence", sequenceName = "user_sequence")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "user_sequence")
    private Long id;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private String address;
    @Column
    private String email;
    @Column
    private String phone;

    @OneToMany(mappedBy = "user")
    private List<Pet> pets;
}
