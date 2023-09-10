const swagger = `
openapi: 3.0.0
info:
  title: My Node.js API
  description: Documentation for My Node.js API
  version: 1.0.0
paths:
  /api/{name}:
    post:
      summary: Update a person by ID
      parameters:
        - in: path
          name: name
          required: true
          description: The name of the person to create
          schema:
            type: string
      responses:
        '200':
          description: Person created successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  errorStatus:
                    type: boolean
                    example: false
                  code:
                    type: string
                    example: --person/success
                  message:
                    type: string
                    example: Person created successfully
                  statusCode:
                    type: integer
                    example: 200
                  data:
                    type: object
                    properties:
                      id:
                        type: string
                      name:
                        type: string
        '404':
          description: User not found
          content:
            application/json:
              schema:
                type: object
                properties:
                  errorStatus:
                    type: boolean
                    example: true
                  code:
                    type: string
                    example: --person/user-notfound
                  message:
                    type: string
                    example: User doesn't exist
                  statusCode:
                    type: integer
                    example: 404

  /api/{identifier}:
    get:
      summary: Get a person by ID or name
      parameters:
        - in: path
          name: identifier
          required: true
          description: The ID or name of the person
          schema:
            type: string
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  errorStatus:
                    type: boolean
                    example: false
                  code:
                    type: string
                    example: --person/success
                  message:
                    type: string
                    example: Success
                  statusCode:
                    type: integer
                    example: 200
                  data:
                    type: object
                    properties:
                      id:
                        type: string
                      name:
                        type: string
        '404':
          description: User not found
          content:
            application/json:
              schema:
                type: object
                properties:
                  errorStatus:
                    type: boolean
                    example: true
                  code:
                    type: string
                    example: --person/user-notfound
                  message:
                    type: string
                    example: User doesn't exist
                  statusCode:
                    type: integer
                    example: 404

    put:
      summary: Update a person by ID
      parameters:
        - in: path
          name: identifier
          required: true
          description: The ID of the person to update
          schema:
            type: string
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                name:
                  type: string
      responses:
        '200':
          description: Person updated successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  errorStatus:
                    type: boolean
                    example: false
                  code:
                    type: string
                    example: --person/success
                  message:
                    type: string
                    example: Person updated successfully
                  statusCode:
                    type: integer
                    example: 200
                  data:
                    type: object
                    properties:
                      id:
                        type: string
                      name:
                        type: string
        '404':
          description: User not found
          content:
            application/json:
              schema:
                type: object
                properties:
                  errorStatus:
                    type: boolean
                    example: true
                  code:
                    type: string
                    example: --person/user-notfound
                  message:
                    type: string
                    example: User doesn't exist
                  statusCode:
                    type: integer
                    example: 404

    delete:
      summary: Delete a person by ID
      parameters:
        - in: path
          name: identifier
          required: true
          description: The ID of the person to delete
          schema:
            type: string
      responses:
        '204':
          description: Person deleted successfully
        '404':
          description: User not found
          content:
            application/json:
              schema:
                type: object
                properties:
                  errorStatus:
                    type: boolean
                    example: true
                  code:
                    type: string
                    example: --person/user-notfound
                  message:
                    type: string
                    example: User doesn't exist
                  statusCode:
                    type: integer
                    example: 404
`

module.exports = swagger