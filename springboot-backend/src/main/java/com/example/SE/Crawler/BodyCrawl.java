package com.example.SE.Crawler;

import com.example.SE.models.Product;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;

public class BodyCrawl implements BaseCrawler{
    @Override
    public void CrawlData() {
        int dem = 0;
        String baseUrl = "https://www.cultbeauty.co.uk/body-wellbeing.list?pageNumber=";
        String baseId = "Body_";
        try (Writer writer = new FileWriter("D:\\SE Project\\springboot-backend\\src\\main\\java\\com\\example\\SE\\JsonFile\\Body.json")) {
            writer.write('[');
            for (int j = 1; j <= 6; ++j) {
                try {
                    String url = "";
                    String num = Integer.toString(j);
                    url = baseUrl + num;
                    String category = "Body";
                    Document doc = Jsoup.connect(url).get();
                    Elements elements = doc.select("#mainContent > div.productListProducts > ul > li");
                    for (Element element : elements) {
                        dem++;
                        String link = element.getElementsByTag("a").attr("abs:href");
                        ///System.out.println("link: " + link);
                        String productId = baseId + Integer.toString(dem);
                        System.out.println(productId);
                        Document docs = Jsoup.connect(link).get();
                        String image = docs.select("#mainContent > div.athenaProductPage_topRow > div.athenaProductPage_firstColumn > div.athenaProductPage_imageContainer > div > div.athenaProductImageCarousel_imagesContainer > div > div:nth-child(1) > img").attr("src");
                        String name = docs.getElementsByClass("productName_title").first().text();
                        String cost = docs.getElementsByClass("productPrice_price").text();
                        String description = "";
                        Elements desPTags = docs.select("#product-description-content-2 > div > div");
                        for (Element desPTag : desPTags) {
                            description += desPTag.getElementsByTag("p").text();
                        }
                        String how_to_use = "";
                        Elements usePTags = docs.select("#product-description-content-15 > div > div");
                        for (Element usePTag : usePTags) {
                            how_to_use += usePTag.getElementsByTag("p").text();
                        }

                        String brand = "";
                        String volume = "";
                        String ingredient = "";
                        Elements ingrePTags = docs.select("#product-description-content-7 > div > div");
                        for (Element ingrePTag : ingrePTags) {
                            ingredient += ingrePTag.getElementsByTag("p").text();
                        }

                        Elements details = docs.select("#product-description-content-9 > div");
                        for (int i = 0; i < details.size(); ++i) {
                            Element detail = details.get(i);
                            String baseQuery = "#product-description-content-9 > div:nth-child(";
                            String number = Integer.toString(i + 1);
                            String lastQuery = baseQuery + number + ")";
                            String lastQuerySpan = lastQuery + "> div > span";
                            String lastQueryLi = lastQuery + "> ul > li";
                            ///System.out.println("Here: " + lastQueryLi);
                            ///System.out.println("Respectively: " + docs.select(lastQueryLi).text());
                            if (docs.select(lastQuerySpan).text().contains("Volume")) {
                                volume = docs.select(lastQueryLi).text();
                            } else if (docs.select(lastQuerySpan).text().contains("Brand")) {
                                brand = docs.select(lastQueryLi).text();
                            }
                        }
                        /*System.out.println("name: " + name);
                        System.out.println("description: " + description);
                        System.out.println("ingredient: " + ingredient);
                        System.out.println("brand: " + brand);
                        System.out.println("Volume: " + volume);
                        System.out.println("---------------------------------");*/
                        if (cost.equals("")) continue;
                        Product product = new Product(productId, category, name, cost, description, how_to_use, ingredient, brand, volume, image);
                        ObjectMapper mapper = new ObjectMapper();
                        ///System.out.println(mapper.writeValueAsString(product));
                        writer.write(mapper.writeValueAsString(product));
                        writer.write(",");
                        writer.write("\n");
                    }
                } catch (IOException err) {
                    err.printStackTrace();
                }
            }
            writer.write(']');
        } catch (IOException err) {
            err.printStackTrace();
        }
    }
}
