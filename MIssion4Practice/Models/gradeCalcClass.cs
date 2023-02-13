using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4Practice.Models
{
    public class gradeCalcClass
    {
        [Required]
        [Range(0, 100, ErrorMessage = "Assignments score must be between 0 and 100")]
        public int Assignments { get; set; }
        
        [Required]
        [Range(0, 100, ErrorMessage = "Assignments score must be between 0 and 100")]
        public int GroupProject { get; set; }
       
        [Required]
        [Range(0, 100, ErrorMessage = "Assignments score must be between 0 and 100")]
        public int Quizzes { get; set; }
       
        [Required]
        [Range(0, 100, ErrorMessage = "Assignments score must be between 0 and 100")]
        public int Midterm { get; set; }
       
        [Required]
        [Range(0, 100, ErrorMessage = "Assignments score must be between 0 and 100")]
        public int Final { get; set; }
        
        [Required]
        [Range(0, 100, ErrorMessage = "Assignments score must be between 0 and 100")]
        public int Intex { get; set; }
    }
}
