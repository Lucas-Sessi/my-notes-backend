import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('usuario')
export class UserEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ type: 'varchar', length: 50 })
  nome: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 50 })
  sobrenome: string;

  @ApiProperty()
  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @ApiProperty()
  @Column({ name: 'senha', type: 'varchar' })
  password: string;

  @ApiProperty()
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
