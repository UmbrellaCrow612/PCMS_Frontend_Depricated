﻿namespace PCMS.API.Models
{
    internal class Priority
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public required string Name { get; set; }

        public required string Description { get; set; }

        public required string ColorCode { get; set; }

        public required int NumericValue { get; set; }


    }
}
