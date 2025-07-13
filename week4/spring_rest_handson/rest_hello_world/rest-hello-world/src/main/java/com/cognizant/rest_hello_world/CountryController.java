package com.cognizant.springcountryrest.controller;

import com.cognizant.springcountryrest.model.Country;
import com.cognizant.springcountryrest.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CountryController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

    @Autowired
    private CountryService countryService;

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        LOGGER.info("START getCountry() with code = {}", code);
        Country country = countryService.getCountry(code);
        LOGGER.info("END getCountry()");
        return country;
    }

    @RequestMapping("/country")  // keep your old endpoint too
    public Country getCountryIndia() {
        LOGGER.info("START getCountryIndia()");
        var context = new org.springframework.context.support.ClassPathXmlApplicationContext("country.xml");
        Country country = context.getBean("countryIN", Country.class);
        LOGGER.info("Country: {}", country);
        LOGGER.info("END getCountryIndia()");
        return country;
    }
}
