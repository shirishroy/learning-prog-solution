package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);


	public static void displayCountry() {
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		Country country = context.getBean("country", Country.class);
		LOGGER.debug("Country : {}", country.toString());
	}
}
public static void main(String[] args) {
    SpringApplication.run(SpringLearnApplication.class, args);
    LOGGER.debug("START main()");
    displayCountry();        // Already existing single country
    displayCountries();      // New method for country list
    LOGGER.debug("END main()");
}



public static void displayCountries() {
    ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
    List<Country> countryList = (List<Country>) context.getBean("countryList");
    for (Country country : countryList) {
        LOGGER.debug("Country from List: {}", country.toString());
    }
}
