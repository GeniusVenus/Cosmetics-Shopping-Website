package main.java.com.example.SE;

import main.java.com.example.SE.Crawler.SkinCrawl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class SeApplication {

	public static void main(String[] args) {
		SpringApplication.run(SeApplication.class, args);
		///SkinCrawl skincrawl = new SkinCrawl();
		///skincrawl.CrawlData();
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
