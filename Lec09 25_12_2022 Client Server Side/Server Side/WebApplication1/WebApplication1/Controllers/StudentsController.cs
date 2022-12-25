using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    
    public class StudentsController : ApiController
    {
        public IHttpActionResult Get()
        {
            try
            {
                return Ok(StudentsDBMock.students);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        public IHttpActionResult Get(int id)
        {
            try
            {
                Student stu2Retun = StudentsDBMock.students.FirstOrDefault(stu => stu.Id == id);
                if (stu2Retun != null)
                {
                    return Ok(stu2Retun);
                }
                return Content(HttpStatusCode.NotFound, $"student with id = {id} was not found in Get by Id!!!");
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Post([FromBody] Student value)
        {
            try
            {
                StudentsDBMock.students.Add(value);
                return Created(new Uri(Request.RequestUri.AbsoluteUri + value.Id), value);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        public IHttpActionResult Put(int id, [FromBody] Student value)
        {
            try
            {
                Student stu2Update = StudentsDBMock.students.FirstOrDefault(stu => stu.Id == id);
                if (stu2Update != null)
                {
                    stu2Update.Name = value.Name;
                    stu2Update.Grade = value.Grade;
                    return Ok();
                }
                return Content(HttpStatusCode.NotFound, $"student with id = {id} was not found in PUT!!!");return Content(HttpStatusCode.NotFound, $"student with id = {id} was not found in PUT!!!");
            }
            catch (Exception ex) 
            {
                return BadRequest(ex.Message);
            }
        }

        public IHttpActionResult Delete(int id)
        {
            try
            {
                Student stu2Delete = StudentsDBMock.students.FirstOrDefault(stu => stu.Id == id);
                if (stu2Delete != null)
                {
                    StudentsDBMock.students.Remove(stu2Delete);
                    return Ok();
                }
                return Content(HttpStatusCode.NotFound, $"student with id = {id} was not found in DELETE!!!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
                throw;
            }
        }


    }
}
