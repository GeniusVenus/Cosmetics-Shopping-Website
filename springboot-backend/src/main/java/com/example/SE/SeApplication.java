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
		//BodyCrawl bodyCrawl = new BodyCrawl();
		//bodyCrawl.CrawlData();
		//FragranceCrawl fragranceCrawl = new FragranceCrawl();
		//fragranceCrawl.CrawlData();
//		HairCrawl hairCrawl = new HairCrawl();
//		hairCrawl.CrawlData();
		//MakeUpCrawl makeUpCrawl = new MakeUpCrawl();
		//makeUpCrawl.CrawlData();
		//SkinCrawl skinCrawl = new SkinCrawl();
 		//skinCrawl.CrawlData();
		//WellnessCrawl wellnessCrawl = new WellnessCrawl();
		//wellnessCrawl.CrawlData();

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
