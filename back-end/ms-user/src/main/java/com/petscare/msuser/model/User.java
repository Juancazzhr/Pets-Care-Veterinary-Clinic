package com.petscare.msuser.model;

import jakarta.persistence.*;
import lombok.*;

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
}
