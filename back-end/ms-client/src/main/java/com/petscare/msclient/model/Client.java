package com.petscare.msclient.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@Entity
@Table(name="Client")
public class Client {

    @Id
    @SequenceGenerator(name="client_sequence", sequenceName = "client_sequence")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "client_sequence")
    private Long id;




}
