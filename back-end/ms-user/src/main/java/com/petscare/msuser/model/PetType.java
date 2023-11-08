package com.petscare.msuser.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "PetTypes")
public class PetType {
    @Id
    @SequenceGenerator(name="petType_sequence", sequenceName = "petType_sequence")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "petType_sequence")
    private Long id;

    @Column(name = "type_name")
    private String typeName;
}

