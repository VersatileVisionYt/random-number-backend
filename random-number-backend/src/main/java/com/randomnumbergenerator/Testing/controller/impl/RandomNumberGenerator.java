package com.randomnumbergenerator.Testing.controller.impl;

import com.randomnumbergenerator.Testing.controller.IRandomNumberGenerator;
import org.springframework.stereotype.Component;

@Component
public class RandomNumberGenerator implements IRandomNumberGenerator {


    @Override
    public double generate() {
        return Math.random()*1000;
    }
}
