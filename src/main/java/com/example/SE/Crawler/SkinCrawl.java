package com.example.SE.Crawler;

import com.example.SE.Collection.Product;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.jsoup.Jsoup;

import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;

import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class SkinCrawl implements BaseCrawler {
    public void CrawlData() {
        int dem = 0;
        String baseUrl = "https://www.cultbeauty.co.uk/skin-care.list?pageNumber=";
        String baseId = "Skin_";
        try (Writer writer = new FileWriter("src/main/java/com/example/SE/JsonFile/Skin.json")) {
            writer.write('[');
            for (int j = 1; j <= 46; ++j) {
                try {
                    String url = "";
                    String num = Integer.toString(j);
                    url = baseUrl + num;
                    String category = "Skin";
                    Document doc = Jsoup.connect(url).get();
                    Elements elements = doc.select("#mainContent > div.productListProducts > ul > li");
                    for (Element element : elements) {
                        dem++;
                        String link = element.getElementsByTag("a").attr("abs:href");
                        ///System.out.println("link: " + link);
                        String productId = baseId + Integer.toString(dem);
                        Document docs = Jsoup.connect(link).get();
                        String name = docs.getElementsByClass("productName_title").text();
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
                            System.out.println("Here: " + lastQueryLi);
                            System.out.println("Respectively: " + docs.select(lastQueryLi).text());
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
                        Product product = new Product(productId, category, name, cost, description, how_to_use, ingredient, brand, volume);
                        ObjectMapper mapper = new ObjectMapper();
                        System.out.println(mapper.writeValueAsString(product));
                        writer.write(mapper.writeValueAsString(product));
                        if (dem != 2695) {
                            writer.write(",");
                        }
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

    /*public static void main(String[] args) throws IOException {
        SkinCrawl crawl = new SkinCrawl();
        crawl.CrawlData();
    }*/
    }
}
