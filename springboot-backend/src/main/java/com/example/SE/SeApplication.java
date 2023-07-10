package com.example.SE;

import com.example.SE.Crawler.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class SeApplication {

	public static void main(String[] args) {
		SpringApplication.run(SeApplication.class, args);
//		SkinCrawl skincrawl = new SkinCrawl();
//        skincrawl.CrawlData();
//        HairCrawl hairCrawl = new HairCrawl();
//        hairCrawl.CrawlData();
//        BodyCrawl bodyCrawl = new BodyCrawl();
//        bodyCrawl.CrawlData();
//        WellnessCrawl wellnessCrawl = new WellnessCrawl();
//        wellnessCrawl.CrawlData();
//        MakeUpCrawl makeUpCrawl = new MakeUpCrawl();
//        makeUpCrawl.CrawlData();
//        FragranceCrawl fragranceCrawl = new FragranceCrawl();
//        fragranceCrawl.CrawlData();
	}
//	@Bean
//	public WebMvcConfigurer corsConfigurer(){
//		return new WebMvcConfigurer() {
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/**")
//						.allowedOrigins("http://localhost:3000")
//						.allowedMethods("*")
//						.allowCredentials(false)
//						.allowedHeaders("*");
//			}
//		};
//	}
}
