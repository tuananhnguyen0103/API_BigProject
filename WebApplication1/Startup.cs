using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using BLL.Interfaces;
using DAL.Interfaces;
using DAL.Helper;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();

            services.AddControllersWithViews()
                .AddNewtonsoftJson(options =>
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
            );
            services.AddTransient<IDatabaseHelper, DatabaseHelper>();

            services.AddTransient<ICategoriesBUS, BLL.CategoriesBUS>();
            services.AddTransient<ICategoriesDAL, DAL.CategoriesDAL>();

            services.AddTransient<IProductBUS, BLL.ProductBUS>();
            services.AddTransient<IProductsDAL, DAL.ProductsDAL>();

            services.AddTransient<ICustomerBUS, BLL.CustomerBUS>();
            services.AddTransient<ICustomerDAL, DAL.CustomerDAL>();

            services.AddTransient<IBillBUS, BLL.BillBUS>();
            services.AddTransient<IBillDAL, DAL.BillDAL>();

            services.AddTransient<IBillDetailsBUS, BLL.BillDetailsBUS>();
            services.AddTransient<IBillDetailDAL, DAL.BillDetailsDAL>();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "WebApplication1", Version = "v1" });
            });
            services.AddCors(options => options.AddPolicy("*",
                builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()

            ));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "WebApplication1 v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("*");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
