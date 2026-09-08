import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { searchProducts } from "./tools/searchProducts.js";
import { getProductDetail } from "./tools/productDetail.js";
import { getProductSkus } from "./tools/productSkus.js";
import { getSupplier } from "./tools/supplier.js";

const server = new McpServer({ name: "1688-mcp-server", version: "0.1.0" });

server.tool("search_products", { query: z.string().min(1) }, async ({ query }) => {
  try { return { content: [{ type: "text", text: JSON.stringify(await searchProducts(query)) }] }; }
  catch (error) { return { content: [{ type: "text", text: error instanceof Error ? error.message : "Unknown error" }], isError: true }; }
});

server.tool("get_product_detail", { productId: z.string().min(1) }, async ({ productId }) => {
  try { return { content: [{ type: "text", text: JSON.stringify(await getProductDetail(productId)) }] }; }
  catch (error) { return { content: [{ type: "text", text: error instanceof Error ? error.message : "Unknown error" }], isError: true }; }
});

server.tool("get_product_skus", { productId: z.string().min(1) }, async ({ productId }) => {
  try { return { content: [{ type: "text", text: JSON.stringify(await getProductSkus(productId)) }] }; }
  catch (error) { return { content: [{ type: "text", text: error instanceof Error ? error.message : "Unknown error" }], isError: true }; }
});

server.tool("get_supplier", { supplierId: z.string().min(1) }, async ({ supplierId }) => {
  try { return { content: [{ type: "text", text: JSON.stringify(await getSupplier(supplierId)) }] }; }
  catch (error) { return { content: [{ type: "text", text: error instanceof Error ? error.message : "Unknown error" }], isError: true }; }
});

const transport = new StdioServerTransport();
await server.connect(transport);
